import { mkdirSync, writeFileSync } from 'node:fs';

const FULL = 2;
const PARTIAL = 1;
const NONE = 0;

const SCORES = {
  HyperChecker: [FULL, FULL, FULL, FULL],
  opsmith: [FULL, FULL, PARTIAL, PARTIAL],
  'hwpx-toolkit': [FULL, FULL, NONE, PARTIAL],
  'humanize-korean-formal': [FULL, FULL, NONE, NONE],
  'islab-platform': [PARTIAL, FULL, FULL, FULL],
  Bridge: [PARTIAL, FULL, FULL, PARTIAL],
  KeylessPlay: [NONE, FULL, FULL, NONE],
  'Hedgehog WebCTF': [NONE, FULL, FULL, FULL],
  ClassFileAuto: [NONE, NONE, FULL, FULL],
};

const LOCALES = {
  ko: {
    file: 'work-map.svg',
    title: '무엇을 만들고 무엇으로 증명했나',
    summary: '프로젝트별 역량 근거 지도',
    capabilities: ['에이전트', '검증', '보안', '운영'],
    scoreLabels: ['없음', '일부', '근거 있음'],
    notes: {
      HyperChecker: '릴스 속 개발 도구 판정 서비스 · 정답셋 32건',
      opsmith: 'Claude Code 운용 계층 · 벤더 교차 검증',
      'hwpx-toolkit': 'HWPX 무손상 편집 스킬 · 한·영 문서',
      'humanize-korean-formal': '공식 문체 교정 스킬 · 불변 검사',
      'islab-platform': '연구실 통합 사이트 · k3s 자체 운영 (비공개)',
      Bridge: '정서 웰니스 앱 · LLM 호출 전 위기 필터',
      KeylessPlay: 'DRM 졸업작품 · Tamarin 형식 검증 (비공개)',
      'Hedgehog WebCTF': 'OWASP 체험형 CTF · 행사 운영 (비공개)',
      ClassFileAuto: 'Eclass 다운로더 · 자격 증명 비저장 (비공개)',
    },
  },
  en: {
    file: 'work-map.en.svg',
    title: 'What I built and how it is proven',
    summary: 'Evidence map by project',
    capabilities: ['Agents', 'Verified', 'Security', 'Ops'],
    scoreLabels: ['None', 'Partial', 'Evidence'],
    notes: {
      HyperChecker: 'Dev-tool claim checker for Reels · 32 labeled cases',
      opsmith: 'Claude Code operating layer · cross-vendor review',
      'hwpx-toolkit': 'Lossless HWPX editing skill · KO/EN docs',
      'humanize-korean-formal': 'Formal Korean rewrite skill · invariant checks',
      'islab-platform': 'Lab site and platform · self-hosted k3s (private)',
      Bridge: 'Wellness app · crisis filter before LLM calls',
      KeylessPlay: 'DRM capstone · Tamarin verification (private)',
      'Hedgehog WebCTF': 'Hands-on OWASP CTF · run at events (private)',
      ClassFileAuto: 'Eclass downloader · no credential storage (private)',
    },
  },
};

const LAYOUT = { width: 880, top: 74, rowHeight: 38, nameX: 8, firstColumnX: 232, columnGap: 62, noteX: 478 };
const LIGHT = '.ink{fill:#1F2328}.muted{fill:#59636E}.mark{fill:#7C3AED}.ring{stroke:#7C3AED}.line{stroke:#D1D9E0}';
const DARK = '.ink{fill:#E6EDF3}.muted{fill:#9198A1}.mark{fill:#8B5CF6}.ring{stroke:#8B5CF6}.line{stroke:#3D444D}';
const FONT = '-apple-system,BlinkMacSystemFont,"Segoe UI","Apple SD Gothic Neo","Noto Sans KR",sans-serif';

const projectNames = Object.keys(SCORES);
const columnX = (index) => LAYOUT.firstColumnX + index * LAYOUT.columnGap;
const rowY = (index) => LAYOUT.top + index * LAYOUT.rowHeight;

function renderScore(score, x, y) {
  if (score === FULL) return `<circle class="mark" cx="${x}" cy="${y}" r="8"/>`;
  if (score === PARTIAL) {
    return `<circle class="ring" cx="${x}" cy="${y}" r="7" fill="none" stroke-width="2"/>`
      + `<path class="mark" d="M${x} ${y - 7}a7 7 0 0 0 0 14z"/>`;
  }
  return `<path class="line" d="M${x - 5} ${y}h10" stroke-width="2" stroke-linecap="round"/>`;
}

function renderRow(locale, name, index) {
  const y = rowY(index);
  const scores = SCORES[name].map((score, column) => renderScore(score, columnX(column), y)).join('');
  return `<text class="ink name" x="${LAYOUT.nameX}" y="${y + 5}">${name}</text>${scores}`
    + `<text class="muted note" x="${LAYOUT.noteX}" y="${y + 5}">${locale.notes[name]}</text>`
    + `<path class="line" d="M0 ${y + 19}H${LAYOUT.width}"/>`;
}

function renderLegend(locale) {
  const [none, partial, full] = locale.scoreLabels;
  return `${renderScore(FULL, 668, 12)}<text class="muted note" x="682" y="17">${full}</text>`
    + `${renderScore(PARTIAL, 758, 12)}<text class="muted note" x="772" y="17">${partial}</text>`
    + `${renderScore(NONE, 818, 12)}<text class="muted note" x="830" y="17">${none}</text>`;
}

function renderHeader(locale) {
  const columns = locale.capabilities.map((label, index) =>
    `<text class="ink head" x="${columnX(index)}" y="44" text-anchor="middle">${label}</text>`).join('');
  return `<text class="ink title" x="${LAYOUT.nameX}" y="19">${locale.title}</text>`
    + `${renderLegend(locale)}${columns}<path class="line" d="M0 55H${LAYOUT.width}"/>`;
}

function describe(locale) {
  return projectNames.map((name) => {
    const scores = SCORES[name].map((score, i) => `${locale.capabilities[i]} ${locale.scoreLabels[score]}`);
    return `${name}: ${scores.join(', ')}.`;
  }).join(' ');
}

function buildSvg(locale) {
  const height = rowY(projectNames.length - 1) + 22;
  const rows = projectNames.map((name, index) => renderRow(locale, name, index)).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${LAYOUT.width}" height="${height}" viewBox="0 0 ${LAYOUT.width} ${height}" role="img" aria-labelledby="t d">
<title id="t">${locale.summary}</title><desc id="d">${describe(locale)}</desc>
<style>text{font-family:${FONT}}.title{font-size:16px;font-weight:600}.head{font-size:13px;font-weight:600}.name{font-size:14px;font-weight:600}.note{font-size:12.5px}${LIGHT}@media (prefers-color-scheme:dark){${DARK}}</style>
${renderHeader(locale)}${rows}
</svg>
`;
}

const assetsDir = new URL('../assets/', import.meta.url);
mkdirSync(assetsDir, { recursive: true });
for (const locale of Object.values(LOCALES)) {
  writeFileSync(new URL(locale.file, assetsDir), buildSvg(locale));
}
