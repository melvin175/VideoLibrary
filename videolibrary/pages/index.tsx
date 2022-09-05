import React from "react";
import Brands from "../components/Brands";
import Section from "../components/Section";

import MainSlider from "../components/MainSlider/MainSlider";
import { gql, GraphQLClient } from "graphql-request";

import Header from "../components/Header";

export const getStaticProps = async () => {
  const url = `https://api-ap-south-1.graphcms.com/v2/cl45xapc418yv01z32u90atx1/master`;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4OTY3NjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ1eGFwYzQxOHl2MDF6MzJ1OTBhdHgxL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjVhZDM2ZTdlLTlmYTEtNGQ0Ni04MjMxLWYzMWYzMWJhYzE1MyIsImp0aSI6ImNsNDh5dDQwNjB1MHkwMXh1OGM3aWN3ZmoifQ.2vjLzU0wn6daQGgvV0Kx9c-nCXQdjJ9VDgh_LwwAd5iyEgBpYxsByZZ5hH6i2eRjmt2P7ADYAFC5CPjrtOgsM3LrfkVD5SuusO7Vnnq5gkKUAfXLihazt9qRrPUOTkN8N4nCgWszDSPTRBDT2IgKPxGwNgBMXkHUFFEKvmqtOnmpvv_97qIy_NZ09zSbGF_RCwvHVhLtcNrvHNokAoJQVm8lzh09NlpLItAH94eplR4vXwzfEt0hsQRQRdpTCMHNazhJbb1Jb92lN_0v9IPAaBNQCM6_imaOf9uEgx4pcJcNUMmKLrXvdsbW-4j9aZZOmhz2QXGu62aOBFtQM9fkjNv_jyZgjAjdLHFAqrWLk6ou7Y0qilF0e2nuK6-7kpW2OmttRZsKyTUCSS6TCuwCQKDMOz0MWFrIr8yXrTtCveOKkKHU7fVkpjrDSaTqW5CDMlxrzVJA_1zTpq2WImi45z3VnhrHIvdGlA_kBsLmfGrdZ7jnLnlEuxRozOfa8kDR6rgnpempH2CHuzKMU5QF3Xb6rRZ1OyPgc_Yv3TXAogsbMlwSV6-Bc2gWbbNRrjh-RdiZtMIxnYjbRp02A_Y5Eg0m4FuSpQTzDPMyka_26NYgMhAtaYipEviLYZ34DCPaeIYMNRLhczpqFDOLV-OhZgxCvRML8_n0fNC87YOXrCM`,
    },
  });

  const videosquery = gql`
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

  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  const data = await graphQLClient.request(videosquery);
  const videos = data.videos;

  return {
    props: {
      videos,
      account,
    },
  };
};

export default function Home({ videos, account }) {
  const toWatch = (videos) => {
    return videos.filter((video) => video.seen == false || video.seen == null);
  };

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre));
  };
  const noOfVideo = toWatch(videos).length;

  return (
    <div>
      <Header account={account} />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <MainSlider />
        <Brands />
        {noOfVideo > 0 && (
          <Section genre={"Recommended for you"} videos={toWatch(videos)} />
        )}
        <Section genre={"Sci-Fi"} videos={filterVideos(videos, "Sci-fi")} />
        <Section
          genre={"Adventure"}
          videos={filterVideos(videos, "Adventure")}
        />
        <Section genre={"Comedy"} videos={filterVideos(videos, "Comedy")} />
        <Section
          genre={"Animation"}
          videos={filterVideos(videos, "Animation")}
        />
        <Section genre={"Family"} videos={filterVideos(videos, "Family")} />
      </main>
    </div>
  );
}
