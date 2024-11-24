import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { FaTelegram } from "react-icons/fa"  // 新增这行

const Process = () => {
  return (
    <div className="h-[45vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl px-4">
          <div className="w-full md:w-1/3 p-4">
            <Heading className="mb-4">列标题 1</Heading>
            <p>这里是第一列的内容描述</p>
          </div>
          
          <div className="w-full md:w-1/3 p-4">
            <Heading className="mb-4">列标题 2</Heading>
            <p>这里是第二列的内容描述</p>
          </div>
          
          <div className="w-full md:w-1/3 p-4">
            <Heading className="mb-4">列标题 3</Heading>
            <p>这里是第三列的内容描述</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
