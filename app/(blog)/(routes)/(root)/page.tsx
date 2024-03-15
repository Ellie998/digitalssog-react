/* eslint-disable @typescript-eslint/no-unused-vars */
import PostitMedium from '@/components/my-ui/postit-medium';
import Categorires from './_components/categories';
import Functions from './_components/functions';
import Note from '@/components/my-ui/note';
import { Suspense } from 'react';
import Loading from './loading.js';

export async function generateMetadata() {
  return {
    // metadataBase: "/",
    charset: 'utf-8',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    title: `디지털쏙`,
    description: `디지털 기기를 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://digitalssog.com`,
    verification: {
      naver: '55145f147d68935311d0493b0428d0a9843e5eb9',
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: ['digital', 'app', 'function', 'description', 'tech'],
    icons: {
      icon: [
        { url: '/assets/favicon/favicon.ico' },
        {
          url: '/assets/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/assets/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/assets/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      manifest: '/assets/favicon/site.webmanifest',
    },
    openGraph: {
      site_name: '디지털쏙',
      title: `디지털쏙`,
      description: `디지털 기기를 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com`,
      type: 'website',
      images: [
        {
          url: 'https://digitalssog.com/assets/ogTitle.png',
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      title: `디지털쏙`,
      description: `디지털 기기를 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com`,
      type: 'website',
      images: [
        {
          url: 'https://digitalssog.com/assets/ogTitle.png',
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

const BlogPage = ({ searchParams }: { searchParams: { tab: string } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="py-20 ">
        {process.env.DATABASE_URL || 'DATABASE_URL ERROR'}
        {process.env.DIRECT_URL || 'DIRECT_URL ERROR'}
        {process.env.NEXT_PUBLIC_DOMAIN || 'NEXT_PUBLIC_DOMAIN ERROR'}
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE || 'NEXT_PUBLIC_GOOGLE_ADSENSE ERROR'}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'NEXT_PUBLIC_GOOGLE_ANALYTICS ERROR'}
        {process.env.NEXT_PUBLIC_NAVER_VERIFICATION || 'NEXT_PUBLIC_NAVER_VERIFICATION ERROR'}
        {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'NEXT_PUBLIC_SUPABASE_ANON_KEY ERROR'}
        {process.env.NEXT_PUBLIC_SUPABASE_URL || 'ERROR'}

        {/* <Note
          className="w-4/5 mx-auto "
          holeNum={17}
          title={'스마트 기기로 사용 가능한 기능들'}
          subTitle={'카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다.'}
        >
          <PostitMedium
            className="w-full col-start-2 col-end-3 mx-auto mb-10 md:w-4/5"
            title={<Categorires tab={searchParams.tab} />}
            content={<Functions searchParams={searchParams} />}
          />
        </Note> */}
      </div>
    </Suspense>
  );
};

export default BlogPage;
