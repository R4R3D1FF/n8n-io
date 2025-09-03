import BlueButton from "@/components/blue-button";
import Card from "@/components/card";
import { DarkButton } from "@/components/dark-button";
import IconMarquee from "@/components/icon-marquee";
import { Navbar } from "@/components/navbar";
import { OrangeButton } from "@/components/orange-button";
import { ArrowRight, Check, CodeXml } from "lucide-react";


export default function Home() {
  return (
    <div>

      <div className="flex flex-col gap-32 min-h-50">

        <section className=" mx-25 flex flex-row justify-center bg-[url('https://n8n.io/images/hero-bg.webp')] bg-[length:100%_auto] bg-[position:150px_0px] relative overflow-hidden h-115">

          <div className="absolute inset-0 dotted-bg opacity-[10%] z-0" />

          <div className="w-[54%] px-12 z-50 flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-semibold">
              <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Flexible AI workflow automation
              </span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent">
                for technical teams
              </span>

            </h1>
            <p className="text-[17px] text-zinc-400">
              {`
Build with the precision of code or the speed of drag-n-drop.
Host with on-prem control or in-the-cloud convenience.
n8n gives you more freedom to implement multi-step AI agents and integrate apps than any other tool.`}
            </p>
            <div className="flex gap-4 ">
              <OrangeButton className="px-5 py-2 text-sm border-b-1" content="Get Started for free" />
              <DarkButton className="text-sm">
                Talk to Sales
              </DarkButton>
            </div>
          </div>
          <div className="w-[46%] ">
            ono
          </div>
        </section>

        <section className=" mx-10 flex flex-col gap-2 justify-between h-100 marquee-background">
          <h1 className="text-5xl font-semibold text-center">
            <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Plug AI into your own data &
            </span>
            <span className="block bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent">
              over 500 integrations
            </span>

          </h1>
          <IconMarquee />

          <div className="flex justify-center">
            <BlueButton>
              Browse all integrations
            </BlueButton>
          </div>

        </section>

        <section className=" mx-25 flex flex-col gap-2 ">
          <h1 className="text-5xl font-semibold text-center">
            <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              The fast way to actually
            </span>
            <span className="block bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent">
              get AI working in your business
            </span>

          </h1>
          <div className="flex gap-2">
            <div className="w-2/3 h-175 flex flex-col gap-2 justify-center">
              <Card className="h-1/2 flex justify-between" >
                <div className="flex flex-col w-1/2 gap-4 justify-center">
                  <h1 className="text-2xl font-semibold">
                    Build multi-step agents calling custom tools
                  </h1>
                  <p className="text-zinc-400 font-light">
                    Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag-n-drop.
                  </p>

                  <div>
                    <BlueButton className="flex items-center gap-2 font-normal">
                      <span>
                        Explore AI
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </BlueButton>
                  </div>

                </div>
                <div className="w-1/2 bg-[url('https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/teams_of_agent_e1f7b47c2f.png')] bg-cover bg-center flex flex-col gap-35 justify-between">
                  <div className="flex flex-col items-center text-xs">
                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-zinc-600">
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        Update Detected
                      </span>
                    </div>

                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-zinc-600">
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        Running Custom Unit Testing
                      </span>
                    </div>

                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-zinc-600" >
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        Update Rolled Back Automatically
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-xs">
                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-[18px] text-zinc-600">
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        IT Team Notified of New Ticket
                      </span>
                    </div>

                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-zinc-600" data-v-df85f908="">
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        Custom Unit Testing Failed
                      </span>
                    </div>

                    <div className="flex w-fit text-center text-zinc-400 border-slate-950 border-1 rounded-full px-3 py-1 flex justify-center items-center gap-2">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-zinc-600" data-v-df85f908="">
                          <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z"
                            data-v-df85f908="">
                          </path>
                        </svg>
                      </span>
                      <span>
                        Update Installed
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="h-1/2" >
              </Card>
            </div>
            <Card className="w-1/3" >
            </Card>
          </div>
        </section>

        <section className="cream-card rounded-2xl  flex h-150 px-24 py-32 mx-25 gap-32">
          <div className="w-1/2 flex flex-col justify-between text-gray-900">
            <h1 className="text-[44px] font-semibold leading-none">
              Code when you need it, UI when you don't
            </h1>
            <p className="w-2/3">
              Other tools limit you to either a visual building experience, or code. With n8n, you get the best of both worlds.
            </p>

            <div className="flex flex-col gap-4 text-zinc-500 ">
              <div className="flex gap-1">
                <CodeXml className="mr-1 " />
                <span className="font-semibold text-gray-950 ">
                  Write JavaScript or Python
                </span>
                - you can always fall back to code

              </div>

              <div className="flex gap-1">

                <CodeXml className="mr-1" />
                <span className="font-semibold text-gray-950">
                  Add libraries
                </span>
                from npm or Python for even more power

              </div>

              <div className="flex gap-1">

                <CodeXml className="mr-1" />
                <span className="font-semibold text-gray-950">
                  Past cURL requests
                </span>
                into your workflow

              </div>

              <div className="flex gap-1">

                <CodeXml className="mr-1" />
                <span className="font-semibold text-gray-950">
                  Merge workflow branches,
                </span>
                don’t just split them

              </div>
            </div>
          </div>
          <div className="w-1/2 p-2 flex perspective-[750px]" >
            <img src="https://n8n.io/images/code.webp" className="w-full h-full border-2 border-white outline-3 outline-black rounded-lg [transform:rotateY(-20deg)]">

            </img>

          </div>
        </section>

        <section className="border-slate-800 border-[1px] h-150 rounded-2xl px-24 mx-25 flex h-150 gap-10">
          <div className="w-auto flex flex-col justify-between py-32">
            <h1 className="text-4xl font-semibold">
              Run. Tweak. Repeat
            </h1>
            <p>
              The same short feedback loops that make you smile at your scripts
            </p>
            <div className="flex flex-wrap ">
              <div className="w-1/2 h-1/2 flex gap-3 pb-4 pr-8">
                <div className="pt-1">
                  <Check className="w-5 h-5 " />
                </div>
                Re-run single steps without re-running the whole workflow
              </div>
              <div className="w-1/2 h-1/2 flex gap-3 pb-4 pr-8">
                <div className="pt-1">
                  <Check className="w-5 h-5 " />
                </div>
                Replay or mock data to avoid waiting for external systems
              </div>
              <div className="w-1/2 h-1/2 flex gap-3 pb-4 pr-8">
                <div className="pt-1">
                  <Check className="w-5 h-5 " />
                </div>
                Debug fast, with logs in line with your code
              </div>
              <div className="w-1/2 h-1/2 flex gap-3 pb-4 pr-8">
                <div className="pt-1">
                  <Check className="w-5 h-5 " />
                </div>
                Use 1700+ templates to jump-start your project
              </div>
              
            </div>
            <div>
              <BlueButton>
                See full product overview
              </BlueButton>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-video pointer-events-none aspect-video relative">
            <div className="absolute inset-0 bg-linear-[90deg,theme(colors.my-purple),transparent_30%,transparent_70%,theme(colors.my-purple)] z-50" />
            <div className="absolute inset-0 bg-linear-[0deg,theme(colors.my-purple),transparent_30%,transparent_70%,theme(colors.my-purple)] z-50" />
            <img src="https://n8n.io/images/thunder.webp" className="h-[37%] pb-10" />
            <video
              preload="auto"
              loop
              autoPlay
              muted
              playsInline
              className="bg-video--mask-linear mix-blend-lighten object-cover object-center absolute left-0 top-0 w-full h-full"
            >
              <source
                src="https://n8n.io/videos/run-tweak-repeat.mp4"
                type="video/mp4"
              />
            </video>
          </div>


        </section>

      </div>
    </div>
  );
}
