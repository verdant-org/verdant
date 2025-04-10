import Image from "next/image"
const About = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="max-w-md mx-auto text-center">Verdant is your best option for learning about environmental threats in your community or elsewhere!</p>
        <p className="max-w-md mx-auto text-center">The Verdant team, understanding the critical importance of environmental issues in modern day, launched this tool in order to 
            make relevant information easily accessible.
        </p>
        <Image src="/verdant_logo.png" width={200} height={200} alt="Verdant Logo" className="object-contain block mx-auto mt-6"></Image>
      </div>
    );
  };
  
  export default About;
  