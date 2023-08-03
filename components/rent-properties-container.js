import PropertyCard from "./property-card";

const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsTimestamp="/ellipse-1@2x.png"
            imageDimensionsText4="/sharenetwork.svg"
            imageDimensionsText5="/heart.svg"
            imageDimensionsText6="/plus.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsTimestamp="/ellipse-1@2x.png"
            imageDimensionsText4="/sharenetwork.svg"
            imageDimensionsText5="/heart.svg"
            imageDimensionsText6="/plus1.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsTimestamp="/ellipse-1@2x.png"
            imageDimensionsText4="/sharenetwork1.svg"
            imageDimensionsText5="/heart.svg"
            imageDimensionsText6="/plus2.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsTimestamp="/ellipse-1@2x.png"
            imageDimensionsText4="/sharenetwork1.svg"
            imageDimensionsText5="/heart.svg"
            imageDimensionsText6="/plus2.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
