import { Product, User,Destek} from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    console.log("connected");
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Product.find({
      musteriisim: { $regex: regex },
    }).count();
    const products = await Product.find({ musteriisim: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};



export const fetchProductKasas = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Product.find({
      musteriisim: { $regex: regex },
    }).count();
    const products = await Product.find({ kasaisim: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};


export const fetchDesteks = async (q, page, kategori, marka, model) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 20;

  try {
    await connectToDB();
    
    // Kategoriler, markalar ve modelleri toplayın
    const kategoriler = await Destek.distinct("destekkategori");
    const markalar = await Destek.distinct("destekmarka");
    const modeller = await Destek.distinct("destekmodel");

    console.log('Kategoriler:', kategoriler);
    console.log('Markalar:', markalar);
    console.log('Modeller:', modeller);

    const query = {};
    if (kategori) query.destekkategori = kategori;
    if (marka) query.destekmarka = marka;
    if (model) query.destekmodel = model;
    if (q) query.musteriisim = { $regex: regex };

    const count = await Destek.find(query).count();
    const products = await Destek.find(query)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, products, kategoriler, markalar, modeller };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};



export const fetchDestek = async (id) => {
  try {
    connectToDB();
    const destek = await Destek.findById(id);
    return destek;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};