import { GraphQLClient } from "graphql-request";

export default async ({ body }, res) => {
  const url =
    "https://api-ap-south-1.graphcms.com/v2/cl45xapc418yv01z32u90atx1/master";
  const graphcms = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4OTY3NjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ1eGFwYzQxOHl2MDF6MzJ1OTBhdHgxL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjVhZDM2ZTdlLTlmYTEtNGQ0Ni04MjMxLWYzMWYzMWJhYzE1MyIsImp0aSI6ImNsNDh5dDQwNjB1MHkwMXh1OGM3aWN3ZmoifQ.2vjLzU0wn6daQGgvV0Kx9c-nCXQdjJ9VDgh_LwwAd5iyEgBpYxsByZZ5hH6i2eRjmt2P7ADYAFC5CPjrtOgsM3LrfkVD5SuusO7Vnnq5gkKUAfXLihazt9qRrPUOTkN8N4nCgWszDSPTRBDT2IgKPxGwNgBMXkHUFFEKvmqtOnmpvv_97qIy_NZ09zSbGF_RCwvHVhLtcNrvHNokAoJQVm8lzh09NlpLItAH94eplR4vXwzfEt0hsQRQRdpTCMHNazhJbb1Jb92lN_0v9IPAaBNQCM6_imaOf9uEgx4pcJcNUMmKLrXvdsbW-4j9aZZOmhz2QXGu62aOBFtQM9fkjNv_jyZgjAjdLHFAqrWLk6ou7Y0qilF0e2nuK6-7kpW2OmttRZsKyTUCSS6TCuwCQKDMOz0MWFrIr8yXrTtCveOKkKHU7fVkpjrDSaTqW5CDMlxrzVJA_1zTpq2WImi45z3VnhrHIvdGlA_kBsLmfGrdZ7jnLnlEuxRozOfa8kDR6rgnpempH2CHuzKMU5QF3Xb6rRZ1OyPgc_Yv3TXAogsbMlwSV6-Bc2gWbbNRrjh-RdiZtMIxnYjbRp02A_Y5Eg0m4FuSpQTzDPMyka_26NYgMhAtaYipEviLYZ34DCPaeIYMNRLhczpqFDOLV-OhZgxCvRML8_n0fNC87YOXrCM`,
    },
  });

  await graphcms.request(
    `
        mutation($slug: String!) {
          updateVideo(where: 
            { slug: $slug}, 
            data: {toWatch: true}
          ) {
            id,
            title,
            seen
          }
        }
        `,
    { slug: body.slug }
  );

  await graphcms.request(
    `mutation publishVideo($slug: String) {
        publishVideo(where: { slug: $slug}, to: PUBLISHED) {
            slug
            }
        }`,
    { slug: body.slug }
  );

  res.status(201).json({ slug: body.slug });
};
