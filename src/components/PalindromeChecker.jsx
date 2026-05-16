import { tokenizeJava } from "../utils/codeHighlighter.jsx";

export default function PalindromeChecker() {
  const javaCode = `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class PalindromeChecker extends JFrame implements ActionListener {

    JLabel lblTitle = new JLabel();
    JLabel lblPalindromeResult = new JLabel();
    JLabel lblLength = new JLabel();

    JTextField txtInput = new JTextField();

    JButton btnAction = new JButton();

    PalindromeChecker() {
        // lblTitle
        lblTitle.setText("Palindrome Checker");
        Font titleFont = new Font("Arial", Font.BOLD, 28);
        lblTitle.setFont(titleFont);
        lblTitle.setBounds(120, 15, 300, 30);
        this.add(lblTitle);

        // txtInput
        txtInput.setBounds(150, 100, 200, 50);
        Font inputFont = new Font("Arial", Font.PLAIN, 24);
        txtInput.setFont(inputFont);
        this.add(txtInput);

        // btnAction
        btnAction.setText("Check if Palindrome");
        btnAction.setBounds(150, 200, 200, 50);
        Font buttonFont = new Font("Arial", Font.ITALIC, 16);
        btnAction.setFont(buttonFont);
        btnAction.addActionListener(this);
        this.add(btnAction);
        this.getRootPane().setDefaultButton(btnAction);

        // lblPalindromeResult
        lblPalindromeResult.setText("This will show the result.");
        lblPalindromeResult.setBounds(100, 250, 300, 50);
        Font descFont = new Font("Arial", Font.ITALIC, 16);
        lblPalindromeResult.setFont(descFont);
        lblPalindromeResult.setHorizontalAlignment(SwingConstants.CENTER);
        this.add(lblPalindromeResult);

        // lblLength
        lblLength.setText("This will show the length.");
        lblLength.setBounds(100, 290, 300, 50);
        lblLength.setFont(descFont);
        lblLength.setHorizontalAlignment(SwingConstants.CENTER);
        this.add(lblLength);

        this.setLayout(null);
        this.setTitle("Palindrome Checker");
        this.setSize(540, 600);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setResizable(false);
        this.setVisible(true);
    }

    // FINDS THE LENGTH OF THE STRING
    public int findLength(String str) {
        int count = 0;

        try {

            // COUNTS THE CHARACTER INDIVIDUALLY USING A LOOP
            while (true) {
                str.charAt(count);
                count++;
            }

        } catch (Exception e) {

        }

        return count;
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnAction) {

            String input = txtInput.getText();
            int length = findLength(input);

            int start = 0;
            int end = length - 1;

            boolean palindrome = true;
            boolean valid = true;

            // CHECKS WHETHER IT'S A PALINDROME USING ASCII
            if (valid) {
                while (start < end) {

                    char left = input.charAt(start);
                    char right = input.charAt(end);

                    // BIG LETTERS = 65 to 90
                    // SMALL LETTERS = 97 to 122

                    if (left >= 'A' && left <= 'Z') {
                        left = (char) (left + 32);
                    }

                    if (right >= 'A' && right <= 'Z') {
                        right = (char) (right + 32);
                    }

                    if (left != right) {
                        palindrome = false;
                        break;
                    }

                    start++;
                    end--;
                }
            }

            lblPalindromeResult.setFont(new Font("Arial", Font.BOLD, 16));

            if (!valid) {
                lblPalindromeResult.setForeground(Color.RED);
                lblPalindromeResult.setText("The input was not a valid word.");
            } else if (palindrome) {
                lblPalindromeResult.setForeground(Color.GREEN);
                lblPalindromeResult.setText("The word " + input + " is a palindrome!");
            } else {
                lblPalindromeResult.setForeground(Color.RED);
                lblPalindromeResult.setText("The word " + input + " is not a palindrome.");
            }

            lblLength.setText("Length: " + length);
        }
    }

    public static void main(String[] args) {
        new PalindromeChecker();
    }
}`;
  return <>{tokenizeJava(javaCode)}</>;
}
