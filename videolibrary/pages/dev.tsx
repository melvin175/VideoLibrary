import React from "react";
import Image from "next/image";
import W from "../public/images/w.png";
import Header from "../components/Header";
import { gql, GraphQLClient } from "graphql-request";
import { motion } from "framer-motion";

export const getServerSideProps = async () => {
  const url = `https://api-ap-south-1.graphcms.com/v2/cl45xapc418yv01z32u90atx1/master`;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4OTY3NjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ1eGFwYzQxOHl2MDF6MzJ1OTBhdHgxL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjVhZDM2ZTdlLTlmYTEtNGQ0Ni04MjMxLWYzMWYzMWJhYzE1MyIsImp0aSI6ImNsNDh5dDQwNjB1MHkwMXh1OGM3aWN3ZmoifQ.2vjLzU0wn6daQGgvV0Kx9c-nCXQdjJ9VDgh_LwwAd5iyEgBpYxsByZZ5hH6i2eRjmt2P7ADYAFC5CPjrtOgsM3LrfkVD5SuusO7Vnnq5gkKUAfXLihazt9qRrPUOTkN8N4nCgWszDSPTRBDT2IgKPxGwNgBMXkHUFFEKvmqtOnmpvv_97qIy_NZ09zSbGF_RCwvHVhLtcNrvHNokAoJQVm8lzh09NlpLItAH94eplR4vXwzfEt0hsQRQRdpTCMHNazhJbb1Jb92lN_0v9IPAaBNQCM6_imaOf9uEgx4pcJcNUMmKLrXvdsbW-4j9aZZOmhz2QXGu62aOBFtQM9fkjNv_jyZgjAjdLHFAqrWLk6ou7Y0qilF0e2nuK6-7kpW2OmttRZsKyTUCSS6TCuwCQKDMOz0MWFrIr8yXrTtCveOKkKHU7fVkpjrDSaTqW5CDMlxrzVJA_1zTpq2WImi45z3VnhrHIvdGlA_kBsLmfGrdZ7jnLnlEuxRozOfa8kDR6rgnpempH2CHuzKMU5QF3Xb6rRZ1OyPgc_Yv3TXAogsbMlwSV6-Bc2gWbbNRrjh-RdiZtMIxnYjbRp02A_Y5Eg0m4FuSpQTzDPMyka_26NYgMhAtaYipEviLYZ34DCPaeIYMNRLhczpqFDOLV-OhZgxCvRML8_n0fNC87YOXrCM`,
    },
  });

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

  return {
    props: {
      account,
    },
  };
};

function dev(account) {
  return (
    <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
      <Header account={account} />
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        className="text-center mt-32"
      >
        <Image
          className="object-contain"
          width={200}
          height={200}
          src={W}
          alt="Logo"
        />
        <span className="space-y-3">
          <p className="font-extrabold text-4xl">Melvin Fernando</p>
          <p className="font-bold text-2xl">Software Engineer</p>
          <p className="font-bold text-xl">India,Pune</p>
        </span>
        <motion.div className="mx-auto flex mt-16 text-center space-x-10 ml-[44%]">
          <a href="https://twitter.com/iamblue175">
            <svg
              className="w-7 h-7 text-blue-300 fill-current mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/melvin-fernando-16a2781a6/">
            <svg
              className="w-7 h-7 text-blue-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
          <a href="https://github.com/melvin175">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="w-7"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default dev;
