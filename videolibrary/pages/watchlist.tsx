import { gql, GraphQLClient } from "graphql-request";

import Header from "../components/Header";
import Section from "../components/Section";
import Image from "next/image";
import W from "../public/images/w.png";

export const getServerSideProps = async () => {
  const url = `https://api-ap-south-1.graphcms.com/v2/cl45xapc418yv01z32u90atx1/master`;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4OTY3NjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ1eGFwYzQxOHl2MDF6MzJ1OTBhdHgxL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjVhZDM2ZTdlLTlmYTEtNGQ0Ni04MjMxLWYzMWYzMWJhYzE1MyIsImp0aSI6ImNsNDh5dDQwNjB1MHkwMXh1OGM3aWN3ZmoifQ.2vjLzU0wn6daQGgvV0Kx9c-nCXQdjJ9VDgh_LwwAd5iyEgBpYxsByZZ5hH6i2eRjmt2P7ADYAFC5CPjrtOgsM3LrfkVD5SuusO7Vnnq5gkKUAfXLihazt9qRrPUOTkN8N4nCgWszDSPTRBDT2IgKPxGwNgBMXkHUFFEKvmqtOnmpvv_97qIy_NZ09zSbGF_RCwvHVhLtcNrvHNokAoJQVm8lzh09NlpLItAH94eplR4vXwzfEt0hsQRQRdpTCMHNazhJbb1Jb92lN_0v9IPAaBNQCM6_imaOf9uEgx4pcJcNUMmKLrXvdsbW-4j9aZZOmhz2QXGu62aOBFtQM9fkjNv_jyZgjAjdLHFAqrWLk6ou7Y0qilF0e2nuK6-7kpW2OmttRZsKyTUCSS6TCuwCQKDMOz0MWFrIr8yXrTtCveOKkKHU7fVkpjrDSaTqW5CDMlxrzVJA_1zTpq2WImi45z3VnhrHIvdGlA_kBsLmfGrdZ7jnLnlEuxRozOfa8kDR6rgnpempH2CHuzKMU5QF3Xb6rRZ1OyPgc_Yv3TXAogsbMlwSV6-Bc2gWbbNRrjh-RdiZtMIxnYjbRp02A_Y5Eg0m4FuSpQTzDPMyka_26NYgMhAtaYipEviLYZ34DCPaeIYMNRLhczpqFDOLV-OhZgxCvRML8_n0fNC87YOXrCM`,
    },
  });

  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        desription
        slug
        seen
        toWatch
        tags
        year
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

  const data = await graphQLClient.request(query);
  const video = data.videos;

  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  return {
    props: {
      video,
      account,
    },
  };
};

const watchlist = ({ video, account }) => {
  const toWatch = (videos) => {
    return videos.filter(
      (video) => video.toWatch == true || video.toWatch == null
    );
  };
  function filterVideos(videos, genre) {
    return videos.filter((video) => video.tags.includes(genre));
  }
  const noOfVideo = toWatch(video).length;

  return (
    <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
      <Header account={account} />
      {noOfVideo > 0 && (
        <div>
          <Section genre={"Your Watchist"} videos={toWatch(video)} />
          <Section
            genre={"Family Movies "}
            videos={filterVideos(video, "Family")}
          />
          <Section
            genre={"Action Movies"}
            videos={filterVideos(video, "Action")}
          />
        </div>
      )}
      {noOfVideo == 0 && (
        <div className="text-center mt-32">
          <Image
            className="object-contain"
            width={200}
            height={200}
            src={W}
            alt="Logo"
          />
          <p className="text-3xl mt-6">Your Watchlist is empty</p>
          <p className="mt-6">
            Content you add to your playlist will get added here.
          </p>
        </div>
      )}
    </main>
  );
};

export default watchlist;
