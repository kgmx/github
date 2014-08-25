<html>
  <head>
    <meta charset="UTF-8">
    <title>投稿フォーム</title>
  </head>
  <body>
    <form action="./upload.php" method="POST" enctype="multipart/form-data" accept-charset="utf-8">
      <fieldset>
        <label for="email">emailアドレス</label>
        <input type="email" name="email" required>
        <label for="userRequest">要望</label>
        <input type="text" name="userRequest" required>

        <legend>画像ファイルを選択(GIF, JPEG, PNGのみ対応)</legend>
        <input type="file" name="before_image" />
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <input type="submit" value="送信する" />
      </fieldset>
    </form>
  </body>
</html>
