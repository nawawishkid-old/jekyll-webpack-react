# Jekyll + Webpack + React

จะเข้าใจ repo นี้ได้อย่างง่ายดายก็ต่อเมื่อมีความรู้เบื้องต้นเกี่ยวกับ:
1. Jekyll
2. Webpack
3. ReactJS

To stop running server running in detach mode (running in background)
```bash
ps aux | grep jekyll | awk '{print $2}' | xargs kill -9
```
- https://stackoverflow.com/a/32803906/6734629