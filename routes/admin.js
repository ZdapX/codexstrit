// routes/admin.js (Cuplikan)
router.post('/upload', upload.single('previewImg'), async (req, res) => {
    const { name, language, type, content, notes } = req.body;
    let previewUrl = '';
    
    if(req.file) {
        // Upload ke Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        previewUrl = result.secure_url;
    }

    const newProject = new Project({
        name, language, type, content, notes, previewUrl,
        authorId: req.session.adminId,
        authorName: req.session.adminName
    });
    
    await newProject.save();
    res.redirect('/admin/dashboard');
});
