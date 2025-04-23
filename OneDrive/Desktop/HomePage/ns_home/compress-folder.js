const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// 입력 폴더 (압축 전)
const inputDir = path.join(__dirname, "src", "img");
// 출력 폴더 (압축 후)
const outputDir = path.join(__dirname, "compressed");

// 출력 폴더 없으면 만들기
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 지원하는 확장자
const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();

  if (imageExtensions.includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.basename(file, ext) + ".webp");

    sharp(inputPath)
      .resize({ width: 1920 }) // 필요시 조정 가능
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ 압축 완료: ${outputPath}`);
      })
      .catch((err) => {
        console.error(`❌ 압축 실패: ${file}`, err);
      });
  }
});
