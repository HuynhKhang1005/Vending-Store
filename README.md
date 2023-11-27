> https://github.com/HuynhKhang1005/Vending-machine.git


# Cài đặt database
...
npm install -g firebase-tools
...
#Cài dự án frontend : npx create-react-app frontend


... Tạo dự án backend : firebase init


# Thanh Toan Visa :  tải  stripe.exe 
# => Chạy cmd đến thư mục chứ file stripe.exe vừa download về 
# => Chạy lệnh : stripe login 
# => Chạy lệnh : stripe listen --forward-to http://127.0.0.1:5001/vending-machine-2511/us-central1/app/api/products/webhook 
...
Tùy theo http gửi về từ server khi chạy npm run server mà thay đổi nó tại thư mục client/src/api 
...
# => Chạy lệnh : stripe trigger payment_intent.succeeded




---------------------------------
# Kiểm tra node version 
...
node --version
...
# lấy code về : tải lại 
# Phía client 
...
yarn install 
...

# Phía server ==> /function/ 
...
npm install 
...

---------------------------------
# Chạy server 
...
cd server/functrions 
npm run serve
...

# Chạy client
...
cd client
yarn start
...
> Packages Used

<!-- prettier-ignore -->
| Name                  | Links | Description |
|-----------------------| ------| ----------- |
| ReactJs               | [React](https://reactjs.org/) |
| Tailwind CSS          | [TailwindCSS](https://tailwindcss.com/) |
| Firebase Functions    | [Funcitons](https://firebase.google.com/docs/functions) |
| Express               | [Express](https://expressjs.com/) | 
| React Router Dom      | [ReactRouterDom](https://reactrouter.com/en/main) | 
| Framer Motion         | [FramerMotion](https://www.framer.com/motion/) | 
| React Icons           | [ReactIcons](https://react-icons.github.io/react-icons/) | 
| Stripe                | [Stripe](https://stripe.com/) | 
