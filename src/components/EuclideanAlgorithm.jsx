import { tokenizeJava } from "../utils/codeHighlighter.jsx";

export default function EuclideanAlgorithm() {
  const javaCode = `import java.util.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class EuclideanAlgorithm {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(
                new Runnable() {
                    public void run() {
                        new EuclideanAlgorithm().EuclideanGUI();
                    }
                });
    }

    public void EuclideanGUI() {
        JFrame frame = new JFrame("Euclidean Algorithm");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 550);
        frame.setLocationRelativeTo(null);
        frame.setLayout(new BorderLayout(10, 10));

        JLabel title = new JLabel("Euclidean Algorithm", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 20));
        title.setOpaque(true);
        title.setBackground(new Color(30, 100, 180));
        title.setForeground(Color.WHITE);
        title.setBorder(BorderFactory.createEmptyBorder(12, 0, 12, 0));
        frame.add(title, BorderLayout.NORTH);

        JPanel inputPanel = new JPanel(new GridLayout(3, 2, 10, 10));
        inputPanel.setBorder(BorderFactory.createTitledBorder("Input"));

        final JTextField txt1 = new JTextField();
        final JTextField txt2 = new JTextField();
        JButton computeBtn = new JButton("Compute");
        JButton clearBtn = new JButton("Clear");

        inputPanel.add(new JLabel("Enter the first integer:"));
        inputPanel.add(txt1);
        inputPanel.add(new JLabel("Enter the second integer:"));
        inputPanel.add(txt2);
        inputPanel.add(computeBtn);
        inputPanel.add(clearBtn);

        final JTextArea output = new JTextArea();
        output.setEditable(false);
        output.setFont(new Font("Courier New", Font.PLAIN, 14));
        output.setMargin(new Insets(10, 10, 10, 10));
        JScrollPane scroll = new JScrollPane(output);
        scroll.setBorder(BorderFactory.createTitledBorder("Solution"));

        JPanel center = new JPanel(new BorderLayout(10, 10));
        center.setBorder(BorderFactory.createEmptyBorder(0, 10, 0, 10));
        center.add(inputPanel, BorderLayout.NORTH);
        center.add(scroll, BorderLayout.CENTER);
        frame.add(center, BorderLayout.CENTER);

        computeBtn.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        int first = 0, second = 0, m = 0, n = 0, sCount = 0, dividend, divisor, quotient, remainder,
                                gcd, lcm;
                        int[] sDividend = new int[1000];
                        int[] sDivisor = new int[1000];
                        int[] sQuotient = new int[1000];
                        int[] sRemainder = new int[1000];

                        try {
                            first = Integer.parseInt(txt1.getText().trim());
                        } catch (NumberFormatException ex) {
                            output.setText("Invalid input. Please enter an integer only.");
                            return;
                        }

                        try {
                            second = Integer.parseInt(txt2.getText().trim());
                        } catch (NumberFormatException ex) {
                            output.setText("Invalid input. Please enter an integer only.");
                            return;
                        }

                        if (first > second) {
                            m = first;
                            n = second;
                        } else {
                            m = second;
                            n = first;
                        }

                        dividend = m;
                        divisor = n;
                        gcd = 0;

                        StringBuilder sb = new StringBuilder();
                        sb.append("SOLUTION:\\n");

                        while (true) {
                            quotient = dividend / divisor;
                            remainder = dividend % divisor;

                            sDividend[sCount] = dividend;
                            sDivisor[sCount] = divisor;
                            sQuotient[sCount] = quotient;
                            sRemainder[sCount] = remainder;
                            sCount++;

                            if (remainder == 0) {
                                sb.append(String.format("%,d = %,d(%,d)\n", dividend, divisor, quotient));
                                gcd = divisor;
                                break;
                            } else {
                                sb.append(String.format("%,d = %,d(%,d) + %,d\n", dividend, divisor, quotient, remainder));
                            }
                            dividend = divisor;
                            divisor = remainder;
                        }

                        lcm = (m * n) / gcd;

                        sb.append(String.format("\nThe integers are %,d and %,d", m, n));
                        sb.append(String.format("\nThe greatest common divisor of %,d and %,d is %,d", m, n, gcd));
                        sb.append(String.format("\nThe least common multiplier of %,d and %,d is %,d", m, n, lcm));

                        output.setText(sb.toString());
                    }
                });

        clearBtn.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        txt1.setText("");
                        txt2.setText("");
                        output.setText("");
                        txt1.requestFocus();
                    }
                });
        frame.setVisible(true);
    }
}`;
  return <>{tokenizeJava(javaCode)}</>;
}
