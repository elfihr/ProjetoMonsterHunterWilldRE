const express = require('express')
const Router = express.Router()

Router.get('', async(req,res)=>{
   
    try {
        const locals = {
          title: 'Home',
          description: 'A Monster Huntre site by Fihr.'
        }
        res.render('index.ejs', {
          locals,
        });
      } catch (error) {
        console.log(error);
      }


})

//GET /
//=====ABoutMH

Router.get('/aboutMH', async (req, res) => {

  try {
    const locals = {
      title: 'About MH',
      description: 'About Monster Hunter Series.'
    }
    res .render('aboutMH.ejs', {
      locals,
    });
  } catch (error) {
    console.log(error);
  }
});

//GET /
//=====Gallery

Router.get('/gallery', async (req, res) => {

    try {
      const locals = {
        title: 'Gallery',
        description: 'Monster Hunter Wilds Image Gallery'
      }
      res .render('gallery.ejs', {
        locals,
      });
    } catch (error) {
      console.log(error);
    }
  });


module.exports = Router