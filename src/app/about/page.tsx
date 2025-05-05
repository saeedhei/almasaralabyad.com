// export const metadata = {
//     title: 'About Us | Your Company Name',
//     description: 'Learn more about our mission, team, and what makes us different.',
//     keywords: ['About Us', 'Company Info', 'Team', 'Next.js'],
//     openGraph: {
//       title: 'About Us | Your Company Name',
//       description: 'Meet the team behind Your Company Name.',
//       url: 'https://yourdomain.com/about',
//       siteName: 'Your Company Name',
//       images: [
//         {
//           url: 'https://yourdomain.com/og-image.jpg',
//           width: 1200,
//           height: 630,
//           alt: 'Your Company',
//         },
//       ],
//       type: 'website',
//     },
//   };
  
  export default function AboutPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>Welcome to our company. We build modern solutions using Next.js and love clean code.</p>
      </main>
    );
  }
  