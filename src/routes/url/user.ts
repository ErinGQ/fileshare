import * as Express from "express";
const router = Express.Router();

router.get('/:id', function(req:any, res:any) {
  if (!isNaN(req.params.id)) {
    res.render('user/user');
  } else {
    res.send('404');
  }
});

export default router;
