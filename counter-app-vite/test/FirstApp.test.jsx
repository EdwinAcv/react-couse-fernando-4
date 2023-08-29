import { render } from "react-test-renderer"
import { FirstApp } from "../src/FirstApp"


describe('purebas en FirstApp', () => {
  test('debe de hacer match con el snapshot', () => {
    render(FirstApp)
  })
  
})
