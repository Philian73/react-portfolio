const fs = require('fs')

// Чтение содержимого SVG файла
const svgContent = fs.readFileSync('src/assets/icons/sprite.svg', 'utf-8')

// Регулярное выражение для поиска id в теге symbol
const idRegex = /<symbol\s+id="([^"]+)"/g

// Сбор id из регулярных выражений
const ids = []
let match

while ((match = idRegex.exec(svgContent))) {
  ids.push(match[1])
}

// Генерация типов
const typesContent = `export * from './icon'\n
export type SvgIdsType = '${ids.join("' | '")}'
`

// Запись типов в файл
fs.writeFileSync('src/shared/ui/icon/index.ts', typesContent)
