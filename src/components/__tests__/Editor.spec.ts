import { mount } from "@vue/test-utils";
import Editor from "./../Editor.vue";

describe("On delete", () => {
  it("should emit no blocks", async () => {
    const wrapper = mount(Editor);
    await wrapper.setProps({
      isDeletable: true,
      isEditable: false,
      canFocus: false,
      blocks: [{
        Text: '',
        Character: ''
      }],
    })
    const button = wrapper.find("button");

    await button.trigger("click");

    expect(wrapper.emitted().update).toBe([]);
  });
});
