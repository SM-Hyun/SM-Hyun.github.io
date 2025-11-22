/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// GitHub 레포 이름 넣기
const repoName = 'SM-Hyun.github.io';

const nextConfig = {
  output: 'export',

  // GitHub Pages (username.github.io/repoName)용 prefix
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // next/image를 정적 호스팅에서 쓰려면 비최적화 옵션
  images: {
    unoptimized: true,
  },
};

export default nextConfig;