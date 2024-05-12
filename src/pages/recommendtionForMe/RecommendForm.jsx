const RecommendForm = () => {
  return (
    <div className="md:w-[470px] w-full p-2 md:p-6  border bg-white">
      <div className="mb-4 text-center">
        <h1 className="text-[25px] md:text-[30px]  font-Inter font-bold">
          Add Recommendation
        </h1>
      </div>
      <form className="space-y-8 font-Inter ">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="title"
              placeholder="Product title"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <input
              type="text"
              name="Product Name"
              placeholder="Product Name"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <input
              type="text"
              name="image-url"
              placeholder="Product Image-URL"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <textarea
              type="text"
              name="recommendation"
              placeholder="Recommendation reason"
              className="w-full h-[150px] md:h-[200px] overflow-auto px-3 py-2 border rounded-md resize-none"
            />
          </div>
        </div>
          <button className="w-full button font-Inter font-semibold">
            Add Recommendation
          </button>
      </form>
    </div>
  );
};

export default RecommendForm;
