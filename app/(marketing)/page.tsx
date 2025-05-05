import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className='pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12'>
        <div className='container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]'>
          <Link 
            href={siteConfig.links.x}
            className='bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm'
            target='_blank'
            rel='noreferrer'
          >
            Xをフォローする
          </Link>
          <h1 className='font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Post Writer</h1>
          <p className='text-muted-foreground sm:text-xl leading-normal max-w-[42rem]'>
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className='space-x-4'>
            <Link
              href='/login'
              className={cn(buttonVariants({size:'lg'}))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section id='features' className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
        <div className='text-center space-y-6 max-w-[58rem] mx-auto'>
          <h2 className="font-extra-bold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js AppRouterやcontentlayerを利用してマークダン形式でブログ投稿ができます。
          </p>
        </div>
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem">
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45" 
                viewBox="0 0 512 512"
              >
                <path 
                  fill="currentColor" 
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRouterの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 25 25">
                <path fill="currentColor" d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Zm8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Z"/>
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">React 18</h3>
                <p className="text-sm text-muted-foreground">
                  Server and Client ComponentsやHooksを利用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55" 
                viewBox="0 0 312 312"
              >
                  <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60"/>
                      <g clip-path="url(#skillIconsSupabaseDark2)">
                          <path fill="url(#skillIconsSupabaseDark0)" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097l-76.374 96.189Z"/>
                          <path fill="url(#skillIconsSupabaseDark1)" fill-opacity=".2" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097l-76.374 96.189Z"/>
                          <path fill="#3ECF8E" d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097l76.374-96.189Z"/>
                      </g>
                      <defs>
                          <linearGradient id="skillIconsSupabaseDark0" x1="127.529" x2="198.661" y1="125.299" y2="155.132" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#249361"/>
                              <stop offset="1" stop-color="#3ECF8E"/>
                          </linearGradient>
                          <linearGradient id="skillIconsSupabaseDark1" x1="95.993" x2="128.433" y1="82.12" y2="143.187" gradientUnits="userSpaceOnUse">
                              <stop/>
                              <stop offset="1" stop-opacity="0"/>
                          </linearGradient>
                          <clipPath id="skillIconsSupabaseDark2">
                              <path fill="#fff" d="M32 28h192.92v200H32z"/>
                          </clipPath>
                      </defs>
                  </g>
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">Supabase</h3>
                <p className="text-sm text-muted-foreground">
                  SupabaseでPostgreSQLのDB作成
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55" 
                viewBox="0 0 32 32"
              >
                <path fill="currentColor" d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754a1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713z"/>
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">Prisma</h3>
                <p className="text-sm text-muted-foreground">
                  PrismaによりORMでDBとやり取り
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65" 
                viewBox="0 0 152 152"
              >
                <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSSを使用してスタイリング
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background boder p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6  h-[180px] bg-white rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60" 
                viewBox="0 0 52 52"
              >
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c12.764-5.885 14.86-15.67 14.86-21.982V16.91S33.43 14.286 24 14.286S9.14 16.909 9.14 16.909v4.61c0 6.31 2.096 16.096 14.86 21.981"/>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.013 14.96v-2.447a8.013 8.013 0 0 0-16.026 0v2.448m9.837 12.109a3.79 3.79 0 1 0-3.648 0a5.671 5.671 0 0 0-3.849 5.368h11.346a5.671 5.671 0 0 0-3.849-5.367"/>
              </svg>
              <div className="apace-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                NextAuth.jsとmiddlewaresを使用したAuthentication
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">Post Writerはログインするとブログ投稿ができるようになります。</p>
        </div>
      </section>

      <section id='contact' className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">もしWebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
            お仕事のご連絡お待ちしております。
          </p>
          <Link 
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}