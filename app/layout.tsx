import "nextra-theme-docs/style.css";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "How to Run Company",
    template: "%s | How to Run Company",
  },
  description: "",
  icons: {
    icon: "/icon.svg",
  },
};

const banner = <Banner storageKey="2025-03-15-unreleased">即将发布...</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
        {/* <Logo width={32} height={32} className="mr-2" /> */}
        <b>How to Run Company</b>
      </>
    }
    projectLink="https://github.com/vmvision/vmboard"
    chatLink="https://t.me/vmboard"
    // chatIcon={<Telegram width={24} height={24} />}
  >
    {/* <GithubMenuBadge />
    <Link href="/auth">
      <Button variant="default" size="sm" className="h-8">
        登录
      </Button>
    </Link> */}
  </Navbar>
);
const footer = <Footer />;
const search = (
  <Search
    emptyResult="没有找到结果"
    loading="加载中..."
    errorText="加载失败"
    placeholder="搜索..."
  />
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh-CN"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
