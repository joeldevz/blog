// file: pages/blog/[slug].js
import Link from "next/link";
import React from "react";
import Head from "next/head";
import NavBlog from "../../components/NavBlog"
import Footer from "../../components/Footer"
import Share from "../../components/Share"

function BlogPostPage(props) {
  const { metaTitle, title, content, author,metaDescription } = props.blog;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta namme="description" content={metaDescription}/>
      </Head>
      <main class="font-sans bg-white">
        <div>
          <NavBlog title={title}/>
          <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
              <h1 class="text-5xl font-semibold text-gray-800">{title}</h1>
              <Link href="../">
                <small class="bg-indigo-600 text-white rounded px-1 cursor-pointer">
                  by {author}
                </small>
              </Link>
            </div>
          </section>
          <section class=" pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-justify blog" dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </section>
          <section class="bg-gray-900 py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
              <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

              <div class="flex flex-col items-center justify-center mt-6">
                <a
                  class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Easy, Free Laravel CI Using GitHub Actions
                    </h3>
                    <span class="block text-gray-600 font-light text-sm">
                      20 Jan 2020
                    </span>
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Pest: a delightful PHP Testing Framework
                    </h3>
                    <span class="block text-gray-600 font-light text-sm">
                      29 Oct 2019
                    </span>
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Using inline SVGs in Vue components
                    </h3>
                    <span class="block text-gray-600 font-light text-sm">
                      15 Oct 2019
                    </span>
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Acceptance Testing Laravel & VueJs Apps with Codeception
                    </h3>
                    <span class="block text-gray-600 font-light text-sm">
                      3 Oct 2019
                    </span>
                  </div>
                </a>
              </div>

              <div class="flex items-center justify-center mt-12">
                <a
                  class="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                  href="#"
                >
                  <span>View More</span>

                  <svg
                    class="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
    <Footer/>
 </div>
      </main>
    </>
  );
}


// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
