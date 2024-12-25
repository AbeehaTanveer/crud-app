const User = require("../model/UserModel");

const createData = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!req.body || Object.keys(req.body).length === 0) {
      res
        .status(400)
        .json({ msg: "Data from frontend is not recieve in the CreateData()" });
    }
    const saveData = new User({ name, email, password, phone });
    const Data = await saveData.save();
    res.status(200).json(Data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const GetAllData = async (req, res) => {
  try {
    const getData = await User.find();
    if (!getData) {
      return res
        .status(400)
        .json({ msg: "Data not find in the GetAllData(_)" });
    }
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const Getone = async (req, res) => {
  const { id } = req.params;
  try {
    const idCheck = await User.findById(id);

    res.status(200).json(idCheck);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


const updateData = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      console.log("id find in Update", id);
    }

    const isAvailable = await User.findById(id);
    if (!isAvailable) {
      return res
        .status(400)
        .json({ msg: "Data not find in the updateData(_)" });
    }
    if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ msg: "Data not recieve in the update()" });
    }
    const updata = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteData = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      console.log("id find in DELL", id);
    }

    const isAvailable = User.findById(id);
    if (!isAvailable) {
      return res
        .status(400)
        .json({ msg: "Data not find in the DeleteData(_)" });
    }
    const dell = await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "data delete scussfully", dell });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};



module.exports = { createData, GetAllData, DeleteData, updateData, Getone };
