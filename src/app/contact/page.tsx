import { Button } from "@/components/ui/button"

const Contact = () => {
    return(
        <div className="p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 ">Contact Us!</h1>
            <textarea placeholder="Enter your question" className="w-full lg:w-[600px] mt-6 h-40 py-4 px-6 text-base resize-none border-4 border-gray-300 rounded-lg"/>
            <Button className="text-white mt-6 w-full lg:w-[600px]">Submit</Button> 
        </div>
    );
};

export default Contact;