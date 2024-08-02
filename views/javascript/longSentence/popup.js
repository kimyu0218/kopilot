import { OutputPopup } from '../components/outputPopup.js';
import { spellCheck } from '../spell/spellCheck.js';
import { LongSentence } from './longSentence.js';

export async function showSuggestion(event, span) {
  event.stopPropagation(); // 이벤트 전파 막기

  const outputPopup = new OutputPopup('긴 문장을 분석 중입니다...', '', null);
  outputPopup.show();
  const outputContent = document.getElementById('output-popup-content');
  outputContent.innerHTML = `
    <div class="spinner-wrap">
      <div class="spinner">
      </div>
    </div>`;
  outputPopup.hideButton();

  const longSentence = LongSentence.getInstance();
  const suggestion = await longSentence.parseSentence(span.innerText);
  outputPopup.set('긴 문장을 다음과 같이 수정해보세요.', suggestion, () => {
    span.outerHTML = suggestion;
    const output = document.getElementById('output');
    const textarea = document.getElementById('textarea');
    textarea.value = output.innerText;
    spellCheck.performSpellCheck(); // 반영하기 클릭 시 다시 맞춤법 검사
    outputPopup.hide();
    textarea.focus(); // 커서를 textarea로 이동
  });
  outputPopup.showButton();
}

export async function showSetting(event) {
  event.stopPropagation(); // 이벤트 전파 막기
  const longSentence = LongSentence.getInstance();

  const outputPopup = new OutputPopup(
    '긴 문장 기준을 입력하세요.',
    `<input id="lengthInput" type="number" style="width: 100%;" value=${longSentence.getLength()}>`,
    () => {
      const input = document.getElementById('lengthInput');
      longSentence.setLength(input.value);
      spellCheck.performSpellCheck();
      outputPopup.hide();
    },
  );
  outputPopup.show();
}
