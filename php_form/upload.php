<?php
if (isset($_FILES['before_image']['error']) && is_int($_FILES['before_image']['error'])) {
  try {
    switch ($_FILES['before_image']['error']) {
    case UPLOAD_ERR_OK:
      break;
    case UPLOAD_ERR_NO_FILE:
      throw new RuntimeException('ファイルが選択されていません');
    case UPLOAD_ERR_INI_SIZE:
    case UPLOAD_ERR_FORM_SIZE:
      throw new RuntimeException('ファイルサイズが大きすぎます');
    default:
      throw new RuntimeException('その他のエラーが発生しました');
    }

    if (!in_array(
      $type = @exif_imagetype($_FILES['before_image']['tmp_name']),
      array(
        IMAGETYPE_GIF,
        IMAGETYPE_JPEG,
        IMAGETYPE_PNG,
      ),
      true
    )) {
      throw new RuntimeException('画像形式が未対応です');
    }

    if (!move_uploaded_file($_FILES['before_image']['tmp_name'], $path = sprintf('./assets/uploads/%s%s', sha1_file($_FILES['before_image']['tmp_name']), image_type_to_extension($type)))) {
      throw new RuntimeException('ファイル保存時にエラーが発生しました');
    }
    chmod($path, 0644);
    $msg = array('green', 'ファイルは正常にアップロードされました');
  } catch (RuntimeException $e) {
    $msg = array('red', $e->getMessage());
  }
}
?>
<html>
  <head>
    <meta charset="UTF-8">
    <title>画像アップロード</title>
  </head>
  <body>
    <fieldset>
      <legend>結果</legend>
      <span style="color:<?=$msg[0]?>;"><?=$msg[1]?></span>
    </fieldset>
  </body>
</html>
