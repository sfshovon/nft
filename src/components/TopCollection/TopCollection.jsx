import CollectionLeft from "./CollectionLeft";
import CollectionMiddle from "./CollectionMiddle";
import CollectionRight from "./CollectionRight";

const TopCollection = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:px-24 px-12 py-10">
      <CollectionLeft></CollectionLeft>
      <CollectionMiddle></CollectionMiddle>
      <CollectionRight></CollectionRight>
    </div>
  );
};

export default TopCollection;