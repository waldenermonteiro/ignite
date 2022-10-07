import React from "react";

import Head from "next/head";
import Link from "next/link";

import { RichText } from "prismic-dom";

import { createClient } from "../../services/prismic";

import styles from "./styles.module.scss";

type Post = {
  uid: string;
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.uid}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const prismic = createClient();

  const response = await prismic.getAllByType("posts");

  console.log(response);

  const posts = response.map((post) => {
    return {
      uid: post.uid,
      slug: post.id,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
