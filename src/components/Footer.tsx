import Image from "next/image";
import Link from "next/link";

type footerData = {
  id: number,
  socialmedia?: string|undefined,
  details?: string,
  ShopCategory?: string,
  helpmenu?: string,
  link?: string,
  cardImage?:string
}

const Footer = () => {

  const footer: footerData[] = [

    { id: 1, socialmedia: "/facebook.png", details: "About Us", ShopCategory: "New Arrival", helpmenu: "Customer Service", link: "", cardImage:"/discover.png" },
    { id: 2, socialmedia: "/instagram.png", details: "Careers", ShopCategory: "Accessories", helpmenu: "My Account", link: "", cardImage: "/skrill.png" },
    { id: 3, socialmedia: "/youtube.png", details: "Affiliates", ShopCategory: "Men", helpmenu: "Find a Store", link: "", cardImage: "/paypal.png" },
    { id: 4, socialmedia: "/pinterest.png", details: "Blog", ShopCategory: "Women", helpmenu: "Legal & Privacy", link: "", cardImage: "/mastercard.png" },
    { id: 5, socialmedia: "/x.png", details: "Contact Us", ShopCategory: "All Products", helpmenu: "Gift Card", link: "", cardImage: "/visa.png" }
  ]

  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">hello@lama.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            {footer.map((details) => (
              <div key={details.id}>
                <Image src={details.socialmedia}  alt="" width={16} height={16} />
              </div>
            ))}

          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              {footer.map((details) => (
                <span key={details.id}>
                  <Link href="">{details.details}</Link>
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              {footer.map((details) => (
                <span key={details.id}>
                  <Link href="">{details.ShopCategory}</Link>
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              {footer.map((details) => (
                <span key={details.id}>
                  <Link href="">{details.helpmenu}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white bg-red-400 hover:font-semibold">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            {footer.map((details) => (
              <div key={details.id}>
                <Image src={details.cardImage} alt="" width={40} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;