import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  disable() {
    this.buttonTarget.innerText = "Bingo!"
    this.buttonTarget.setAttribute("disabled", "")
  }
}
