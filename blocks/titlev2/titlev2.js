export default function decorate(block) {
    console.log("currBlock", currBlock);
    block.innerHTML = `
      <div class="title">
        <h1>${currBlock.innerHTML}</h1>
      </div>
    `;
  }