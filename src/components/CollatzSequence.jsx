import { tokenizeJava } from "../utils/codeHighlighter.jsx";

export default function CollatzSequence() {
  const javaCode = `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Collatz_Sequence extends JFrame {

    private JTextField inputField;
    private JTextArea outputArea;
    private JButton generateButton;
    private JButton clearButton;

    public Collatz_Sequence() {
        setTitle("Collatz Sequence");
        setSize(600, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        Color bgColor = new Color(30, 30, 30);
        Color fgColor = new Color(220, 220, 220);
        Color buttonColor = new Color(60, 63, 65);

        JPanel topPanel = new JPanel();
        topPanel.setBackground(bgColor);

        JLabel label = new JLabel("Input The Initial Value:");
        label.setForeground(fgColor);

        inputField = new JTextField(10);

        generateButton = new JButton("Submit");
        clearButton = new JButton("Clear");

        generateButton.setBackground(buttonColor);
        generateButton.setForeground(Color.white);
        generateButton.setFocusPainted(false);

        clearButton.setBackground(buttonColor);
        clearButton.setForeground(Color.white);
        clearButton.setFocusPainted(false);

        topPanel.add(label);
        topPanel.add(inputField);
        topPanel.add(generateButton);
        topPanel.add(clearButton);

        add(topPanel, BorderLayout.NORTH);

        outputArea = new JTextArea();
        outputArea.setEditable(false);
        outputArea.setBackground(bgColor);
        outputArea.setForeground(fgColor);
        outputArea.setCaretColor(Color.white);

        add(new JScrollPane(outputArea), BorderLayout.CENTER);

        generateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                generateCollatz();
            }
        });

        clearButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                outputArea.setText("");
            }
        });

        getContentPane().setBackground(bgColor);
    }

    private void generateCollatz() {
        outputArea.setText("");

        StringBuilder output = new StringBuilder();

        try {
            int n = Integer.parseInt(inputField.getText());
            output.append("This program will find all the terms of the Collatz sequence.\\n\\n");
            output.append("Input the initial value: ").append(String.format("%,d", n)).append("\\n");

            if (n <= 0) {
                output.append("INVALID OUTPUT");
                outputArea.setText(output.toString());
                return;
            }

            if (n % 2 == 0) {
                output.append("INVALID OUTPUT");
                outputArea.setText(output.toString());
                return;
            }

            output.append("The Collatz sequence are:\\n");

            while (n != 1) {
                output.append(String.format("%,d", n)).append(" ➜ ");

                if (n % 2 == 0) {
                    n = n / 2;
                } else {
                    n = (3 * n) + 1;
                }
            }
            output.append(1);

            outputArea.setText(output.toString());

        } catch (NumberFormatException e) {

            output.append("INVALID OUTPUT");

            outputArea.setText(output.toString());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Collatz_Sequence().setVisible(true);
        });
    }
}`;
  return <>{tokenizeJava(javaCode)}</>;
}
