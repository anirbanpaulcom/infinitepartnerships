// import {  H4, H5, P2, P3, Skeleton, Span } from '@/lib/ui';
// import IconButton from '@/lib/ui/iconbutton';
// import { MoveUpRight } from 'lucide-react';
// import Link from 'next/link';

// export function CardLoader({ loading = false, total = 1 }: { loading: boolean, total: number }) {
//   return (
//     loading ? (
//       <>
//         {Array.from({ length: total }).map((_, index) => (
//           <div
//             key={index}
//             className="py-5 px-6 flex flex-col justify-between rounded-xl space-y-3 overflow-hidden h-72 sm:h-64 w-full mx-4 sm:mx-8 md:mx-10 max-w-4xl my-4 border-on hover:bg-gray hover:border-transparent"
//           >
//             <div>
//               <div className='flex justify-between items-center'>
//                 <Skeleton className='h-6 w-40 rounded-lg' />
//                 <Skeleton className='size-8 rounded-lg' />
//               </div>
//               <div className='space-y-4 my-6'>
//                 <Skeleton className='h-4 max-w-56 rounded-md' />
//                 <Skeleton className='h-4 max-w-64 rounded-md' />
//                 <Skeleton className='h-4 max-w-96 rounded-md' />
//               </div>
//             </div>
//             <div className='flex justify-between'>
//               <Skeleton className='h-6 w-24 rounded-lg' />
//               <Skeleton className='h-6 w-20 rounded-lg' />
//             </div>
//           </div>
//         ))}
//       </>
//     ) : (
//       <H5 className='my-20'>No Blogs Found</H5>
//     )
//   );
// }


// export default function Card({
//   link,
//   title,
//   subtitle,
//   content,
//   time,
//   footer,
// }: {
//   link?: string;
//   title?: string;
//   subtitle?: string;
//   content?: string;
//   time?: string;
//   footer?: string;
// }) {
//   return (
//     <Link
//       href={link || '#'}
//       className="py-5 px-6 cursor-pointer flex flex-col justify-between rounded-xl space-y-3 overflow-hidden h-72 sm:h-64 w-full mx-4 sm:mx-8 md:mx-10 max-w-4xl my-4 border-on hover:bg-gray hover:border-transparent"
//     >
//       <div className="flex flex-col justify-between">
//         <div className="flex justify-between items-center">
//           <H4>{title}</H4>
//           <IconButton
//             Icon={<MoveUpRight className='size-4' />}
//             hoverIcon={<MoveUpRight className='text-amber-500 size-4' />}
//             href={link}
//           />
//         </div>
//         <Span className="font-normal">{subtitle}</Span>
//         <P2 className="md:w-1/2 overflow-hidden line-clamp-4 md:line-clamp-6">
//           {content}
//         </P2>
//       </div>
//       <div className="flex justify-between items-center">
//         {time && <P3>{time}</P3>}
//         {footer && <P3>{footer}</P3>}
//       </div>
//     </Link>
//   );
// }
