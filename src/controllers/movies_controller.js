import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("movies controller connected")
  }
}
