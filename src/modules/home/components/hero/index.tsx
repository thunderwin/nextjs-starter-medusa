import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { FaTelegram } from "react-icons/fa"  // 新增这行

const Hero = () => {
  return (
    <div className="h-[45vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-6xl leading-10 text-ui-fg-base font-normal line-height-10"
          >
            Build your own webshop in 10 minutes
          </Heading>

          <Heading
            level="h2"
            className="text-3xl mt-4 leading-10 text-ui-fg-subtle font-normal"
          >
            Manage eveything via telegram bot, so Easy!
          </Heading>
        </span>


        <a
          href="https://t.me/tokwork_shop_maker_bot"
          target="_blank"
        >
          <Button >
            <FaTelegram className="w-8 h-8 mr-2" />
            Start Now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
