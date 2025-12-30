export function copyAccountNumber(id) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const text = element.textContent || element.innerText;
  const bankPattern = /^(국민|카카오뱅크|농협|신한|우리|하나|기업|SC제일|씨티|대구|부산|경남|광주|전북|제주|수협|우체국|새마을금고|신협|산업|한국씨티|케이뱅크|토스뱅크|카뱅)\s*/i;
  
  let accountNumber = text.replace(bankPattern, '').trim();
  accountNumber = accountNumber.replace(/\s+/g, '');

  if (/^\d+$/.test(accountNumber)) {
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert("계좌번호가 복사되었습니다: " + accountNumber);
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = accountNumber;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert("계좌번호가 복사되었습니다: " + accountNumber);
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert("복사되었습니다");
    }).catch(() => {
      const r = document.createRange();
      r.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      alert("복사되었습니다");
      window.getSelection().removeAllRanges();
    });
  }
}

export function copyURL() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다.");
  }).catch(() => {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.");
  });
}

