# 🫧 Ngăn chặn sự kiện nổi bọt

## ⚙️ Setup
- ⚒️ Tạo ra 3 card
- ⚒️ Gắn sự kiện cho cả card và button
- ⚒️ **Card 1** : có sự kiện nổi bọt -> khi click button thì sự kiện của card cũng được kích hoạt
- ⚒️ **Card 2** : ngăn chặn sự kiện nổi bọt sử dụng hàm có sẵn -> khi clich button thì chỉ có sự kiện của button mới được gọi
  - Phương pháp ngăn chặn ở luôn con => bên trên document sẽ không đón được sự kiện nên sẽ ảnh hưởng tới kết quả theo dõi analytics
- ⚒️ **Card 3** : ngăn chặn sự kiện nổi bọt tự setup -> khi clich button thì chỉ có sự kiện của button mới được gọi
  - Phương pháp để con nổi bọt lên cha nhưng sẽ ngăn chặn nó chạy