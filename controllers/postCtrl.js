import Posts from "../models/postModel";

const postCtrl = {
  createPost: async (req, res) => {
    const { title, video, isComment, isPrivate } = req.body;

    if (video.length === 0)
      return res.status(400).json({ msg: "Пожалуйста добавьте видео!" });
    const newPost = new Posts({
      title,
      video,
      isComment,
      isPrivate,
      user: req.user._id,
    });

    await newPost.save();

    res.json({
      msg: "Пост создан!",
      newPost: {
        ...newPost._doc,
        user: req.user,
      },
    });
  },
  getPosts: async (req, res) => {
    const posts = await Posts.find({ user: [...req.user.following, req.user._id] })
      .sort("-createdAt")
      .populate("user likes", "avatar username fullname followers");

    res.json({
      msg: "Success!",
      result: posts.length,
      posts,
    });
  },
};

export default postCtrl;
