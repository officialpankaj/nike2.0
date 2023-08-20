const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imageURL.bigShoe ? "border-coral-red shadow-2xl" : "border-transparent"} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:pt-4">
        <img src={imageURL.thumbnail} alt="shoe colection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
