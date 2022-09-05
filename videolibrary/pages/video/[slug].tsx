import { gql, GraphQLClient } from "graphql-request";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import Sectioncol from "../../components/Sectioncol";
export const getServerSideProps = async (pageContext) => {
  const url = `https://api-ap-south-1.graphcms.com/v2/cl45xapc418yv01z32u90atx1/master`;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4OTY3NjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ1eGFwYzQxOHl2MDF6MzJ1OTBhdHgxL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjVhZDM2ZTdlLTlmYTEtNGQ0Ni04MjMxLWYzMWYzMWJhYzE1MyIsImp0aSI6ImNsNDh5dDQwNjB1MHkwMXh1OGM3aWN3ZmoifQ.2vjLzU0wn6daQGgvV0Kx9c-nCXQdjJ9VDgh_LwwAd5iyEgBpYxsByZZ5hH6i2eRjmt2P7ADYAFC5CPjrtOgsM3LrfkVD5SuusO7Vnnq5gkKUAfXLihazt9qRrPUOTkN8N4nCgWszDSPTRBDT2IgKPxGwNgBMXkHUFFEKvmqtOnmpvv_97qIy_NZ09zSbGF_RCwvHVhLtcNrvHNokAoJQVm8lzh09NlpLItAH94eplR4vXwzfEt0hsQRQRdpTCMHNazhJbb1Jb92lN_0v9IPAaBNQCM6_imaOf9uEgx4pcJcNUMmKLrXvdsbW-4j9aZZOmhz2QXGu62aOBFtQM9fkjNv_jyZgjAjdLHFAqrWLk6ou7Y0qilF0e2nuK6-7kpW2OmttRZsKyTUCSS6TCuwCQKDMOz0MWFrIr8yXrTtCveOKkKHU7fVkpjrDSaTqW5CDMlxrzVJA_1zTpq2WImi45z3VnhrHIvdGlA_kBsLmfGrdZ7jnLnlEuxRozOfa8kDR6rgnpempH2CHuzKMU5QF3Xb6rRZ1OyPgc_Yv3TXAogsbMlwSV6-Bc2gWbbNRrjh-RdiZtMIxnYjbRp02A_Y5Eg0m4FuSpQTzDPMyka_26NYgMhAtaYipEviLYZ34DCPaeIYMNRLhczpqFDOLV-OhZgxCvRML8_n0fNC87YOXrCM`,
    },
  });

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      videos(where: { slug: $pageSlug }) {
        createdAt
        id
        title
        desription
        slug
        seen
        toWatch
        year
        tags
        thumbnail {
          url
        }
        wallpaper {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const accountQuery = gql`
    query {
      account(where: { id: "cl464f0ei10uw0bpn90og7p1s" }) {
        username
        avatar {
          url
        }
      }
    }
  `;

  const recommendationQuery = gql`
    query {
      videos {
        createdAt
        id
        title
        desription
        slug
        seen
        tags
        year
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const video = data.videos;

  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  const recommendedData = await graphQLClient.request(recommendationQuery);
  const rData = recommendedData.videos;

  return {
    props: {
      video,
      account,
      rData,
    },
  };
};

const changeToSeen = async (slug) => {
  await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
};

const changeToWatch = async (slug) => {
  await fetch("/api/changeToWatch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
};
const removeFromWatch = async (slug) => {
  await fetch("/api/removeFromWatch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
};

const Video = ({ video, account, rData }) => {
  const [watching, setWatching] = useState(false);
  const [toWatch, setToWatch] = useState(video[0].toWatch);
  const [videoTags, setVideoTags] = useState(video[0].tags);

  const unSeenVideos = (videos) => {
    return videos.filter((video) => video.seen == false || video.seen == null);
  };

  return (
    <>
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Header account={account} />
        {!watching && (
          <Image
            className="w-[100%] top-0 relative opacity-25"
            src={video[0].wallpaper.url}
            alt={video[0].title}
            layout="fill"
          />
        )}

        {!watching && (
          <div className="relative mt-[10%] ml-24 w-8/12 space-y-4">
            <div className="mb-8">
              <h1 className="uppercase text-4xl font-bold">{video[0].title}</h1>
              <p className="font-bold  w-[55%]">{video[0].year}</p>
              <p className="font-bold">{video[0].desription}</p>

              {videoTags.map((tags, i) => {
                return (
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    key={i}
                    className="py-2 px-3 font-bold rounded-xl cursor-not-allowed text-sm  mt-6 mx-2 bg-black text-white bg-opacity-80 shadow-inner"
                  >
                    {tags}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex bg-black text-white bg-opacity-80 font-bold rounded-xl items-center text-xl px-7"
                onClick={() => {
                  changeToSeen(video[0].slug);
                  watching ? setWatching(false) : setWatching(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
                Play
              </motion.button>

              {!toWatch && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black text-white bg-opacity-80  p-5 ml-10 rounded-full"
                  onClick={() => {
                    changeToWatch(video[0].slug);
                    toWatch ? setToWatch(false) : setToWatch(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              )}
              {toWatch && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black text-white bg-opacity-80  p-5 ml-10 rounded-full text-3xl"
                  onClick={() => {
                    removeFromWatch(video[0].slug);
                    toWatch ? setToWatch(false) : setToWatch(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
        )}

        {watching && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className="flex"
          >
            <div className="w-[100%]">
              <video controls className="w-[100%] rounded-lg pl-6 pt-5 pr-5">
                <source src={video[0].mp4.url} type="video/mp4" />
              </video>
              <div className="p-6 mt-4 space-y-3">
                <p className="text-4xl font-bold">{video[0].title}</p>
                <p>{video[0].year}</p>
                <p className="text-xl font-semibold w-[80%]">
                  {video[0].desription}
                </p>
              </div>
            </div>
            <div>
              <Sectioncol
                genre={"Originals By Disney"}
                videos={unSeenVideos(rData)}
              />
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
};

export default Video;
