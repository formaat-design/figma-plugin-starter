import { createRoot } from "react-dom/client";
import { Reshaped, View, Button } from "reshaped";
import "reshaped/themes/figma/theme.css";

const App = () => {
  return (
    <View padding={4}>
      <Button fullWidth color="primary">
        Press me
      </Button>
    </View>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <Reshaped theme="figma">
    <App />
  </Reshaped>,
);
