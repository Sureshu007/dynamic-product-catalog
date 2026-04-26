const groupByCategory = (data) => {
  const result = {};

  data.forEach((item, index) => {
    const category = item.category;

    const newItem = {
      ...item,
      id: index,
    };

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(newItem);
  });

  return result;
};

export default groupByCategory;
