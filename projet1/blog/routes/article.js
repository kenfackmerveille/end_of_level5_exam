const express = require('express');
const router = express.Router();
const articleModel = require('../models/article.model');
const path = require('path');

router.get('/blog', function (req, res) {
    res.render('blog');
})
router.post('/blog', async(req, res) =>{
    try {
        const { title, description, author, tags, status, created_at } = req.body;

        if (!title || !description || !author || !tags) {
            return res.status(403).json({ message: "article has not created" });
        }

        const aticle = new articleModel({ title, description, author, tags, status, created_at })
        await aticle.save()
        return res.status(201).json({
            status: true,
            message: "article has being created",
            data: aticle
        })

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

router.get('/', async function (req, res) {
    try {
        const allArticles = await articleModel.find({});
        if (!allArticles) return res.status(403).json({ message: "error loading articles" });

        return res.status(201).json({ message: allArticles });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})


router.post('/blog/:id', async function (req, res) {
    const { title, description, author, tags, status } = req.body;

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id);
        res.json({ message: updatedBlog + "successfully update" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/blog/:id', async function (req, res) {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;