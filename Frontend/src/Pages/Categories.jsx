import "../CSS/Categories.css";

const category = [
  "Web Development",
  "Science",
  "LifeStyle",
  "Movie",
  "Fashion",
  "Cars",
  "Pets",
  "Cultures",
  "Others",
  "Politics",
  "Engineering",
  "Food",
  "Cuisins",
  "Photography",
  "Wild Life",
  "Bikes",
  "Sports",
  "Machines",
  "National Geography",
  "Anime",
  "Hentai",
  'Crypto',
  "Bitcoin",
  "Forbs",
  "Celebraties"
];

const Categories = ({ categories, setCategories, prevStep, submit }) => {
  const toggleCategory = (data) => {
    if (categories.includes(data)) {
      setCategories(categories.filter((c) => c != data));
    } else {
      setCategories([...categories, data]);
    }
  };
  return (
    <div className="Main_container">
      <form>
        <h2>Select Your Intrest</h2>
        <div className="Category_container">
          {category.map((data, index) => (
            <div>
              <button
                key={index}
                type="button"
                onClick={() => toggleCategory(data)}
                style={{
                  backgroundColor: categories.includes(data)
                    ? "#44403B"
                    : "#fff",
                  color: categories.includes(data) ? "#fff" : "#000",
                }}
              >
                {data}
              </button>
            </div>
          ))}
        </div>

        <div className="step-buttons">
          <button className="finish-btn" onClick={submit}>
            Finish Signup
          </button>
          <button className="back-btn" onClick={prevStep}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Categories;
