import { tokenizeJava } from "../utils/codeHighlighter.jsx";

export default function Recursion() {
  const javaCode = `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class RecursionAutomataLab
{

    // Panels for each screen
    static JPanel mainPanel, fibPanel, lucPanel, triPanel;
    static CardLayout cardLayout;
    static JPanel container;
    static JFrame frame;

    public static void main(String[] args) 
    {
        frame = new JFrame("Recursion Sequences");
        frame.setSize(500, 400);
        frame.setLocationRelativeTo(null);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        cardLayout = new CardLayout();
        container  = new JPanel(cardLayout);

        // Build each screen
        mainPanel = buildMainMenu();
        fibPanel  = buildFibScreen();
        lucPanel  = buildLucasScreen();
        triPanel  = buildTribonacciScreen();

        container.add(mainPanel, "MENU");
        container.add(fibPanel,  "FIB");
        container.add(lucPanel,  "LUC");
        container.add(triPanel,  "TRI");

        frame.add(container);
        frame.setVisible(true);
    }

    // -------------------------------------------------------
    // MAIN MENU
    // -------------------------------------------------------
    static JPanel buildMainMenu() 
    {
        JPanel panel = new JPanel(new BorderLayout(10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 60, 20, 60));

        // Title
        JLabel title = new JLabel("RECURSION SEQUENCES", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 20));
        panel.add(title, BorderLayout.NORTH);

        // Buttons
        JPanel btnPanel = new JPanel(new GridLayout(4, 1, 0, 10));
        btnPanel.setBorder(BorderFactory.createEmptyBorder(20, 10, 20, 10));

        JButton btnFib  = new JButton("1. Fibonacci Numbers");
        JButton btnLuc  = new JButton("2. Lucas Numbers");
        JButton btnTri  = new JButton("3. Tribonacci Numbers");
        JButton btnExit = new JButton("4. Exit");

        Font f = new Font("Arial", Font.PLAIN, 14);
        btnFib.setFont(f);
        btnLuc.setFont(f);
        btnTri.setFont(f);
        btnExit.setFont(f);

        btnFib .addActionListener(e -> cardLayout.show(container, "FIB"));
        btnLuc .addActionListener(e -> cardLayout.show(container, "LUC"));
        btnTri .addActionListener(e -> cardLayout.show(container, "TRI"));
        btnExit.addActionListener(e -> System.exit(0));

        btnPanel.add(btnFib);
        btnPanel.add(btnLuc);
        btnPanel.add(btnTri);
        btnPanel.add(btnExit);

        panel.add(btnPanel, BorderLayout.CENTER);

        // Footer
        JLabel footer = new JLabel("Prof. Lester G. Diampoc, MSME", SwingConstants.CENTER);
        footer.setFont(new Font("Arial", Font.ITALIC, 11));
        panel.add(footer, BorderLayout.SOUTH);

        return panel;
    }

    // -------------------------------------------------------
    // FIBONACCI SCREEN
    // -------------------------------------------------------
    static JPanel buildFibScreen() 
    {
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setBorder(BorderFactory.createEmptyBorder(15, 20, 15, 20));

        // Title
        JLabel title = new JLabel("Fibonacci Numbers");
        title.setFont(new Font("Arial", Font.BOLD, 16));
        panel.add(title, BorderLayout.NORTH);

        // Info
        JTextArea info = new JTextArea(
            "Formula: F(n) = F(n-1) + F(n-2),  F(0)=0, F(1)=1\\n" +
            "Example: 0, 1, 1, 2, 3, 5, 8, 13, 21 ..."
        );
        info.setFont(new Font("Arial", Font.PLAIN, 12));
        info.setEditable(false);
        info.setBackground(panel.getBackground());

        // Input row
        JLabel    lblInput  = new JLabel("Number of terms (> 2): ");
        JTextField txtInput = new JTextField(6);
        JButton   btnCompute = new JButton("Compute");
        JButton   btnBack    = new JButton("Back to Menu");

        JPanel inputRow = new JPanel(new FlowLayout(FlowLayout.LEFT));
        inputRow.add(lblInput);
        inputRow.add(txtInput);
        inputRow.add(btnCompute);
        inputRow.add(btnBack);

        // Output
        JTextArea output = new JTextArea(10, 0);
        output.setFont(new Font("Monospaced", Font.PLAIN, 13));
        output.setEditable(false);
        output.setLineWrap(true);
        JScrollPane scroll = new JScrollPane(output);

        // Center layout
        JPanel center = new JPanel(new BorderLayout(5, 5));
        center.add(info,     BorderLayout.NORTH);
        center.add(inputRow, BorderLayout.CENTER);
        center.add(scroll,   BorderLayout.SOUTH);
        panel.add(center, BorderLayout.CENTER);

        // Compute button logic
        btnCompute.addActionListener(e -> 
        {
            int n;
            try 
            {
                n = Integer.parseInt(txtInput.getText().trim());
            } catch (NumberFormatException ex) {
                output.setText("Please enter a valid whole number.");
                return;
            }
            if (n <= 2) 
            {
                output.setText("Invalid input. Number of terms must be greater than 2.");
                return;
            }

            // Compute Fibonacci
            long[] seq = new long[n];
            seq[0] = 0;
            seq[1] = 1;
            for (int i = 2; i < n; i++) 
            {
                seq[i] = seq[i - 1] + seq[i - 2];
            }

            output.setText(
                "This program will find all the terms of the Fibonacci numbers.\\n" +
                "Number of terms: " + n + "\\n\\n" +
                "The Fibonacci numbers are:\\n" +
                buildSequenceString(seq)
            );
        });

        // Back button logic
        btnBack.addActionListener(e -> 
        {
            txtInput.setText("");
            output.setText("");
            cardLayout.show(container, "MENU");
        });

        return panel;
    }

    // -------------------------------------------------------
    // LUCAS SCREEN
    // -------------------------------------------------------
    static JPanel buildLucasScreen() 
    {
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setBorder(BorderFactory.createEmptyBorder(15, 20, 15, 20));

        JLabel title = new JLabel("Lucas Numbers");
        title.setFont(new Font("Arial", Font.BOLD, 16));
        panel.add(title, BorderLayout.NORTH);

        JTextArea info = new JTextArea(
            "Formula: L(n) = L(n-1) + L(n-2),  L(0)=2, L(1)=1\\n" +
            "Example: 2, 1, 3, 4, 7, 11, 18, 29 ..."
        );
        info.setFont(new Font("Arial", Font.PLAIN, 12));
        info.setEditable(false);
        info.setBackground(panel.getBackground());

        JLabel    lblInput   = new JLabel("Number of terms (> 2): ");
        JTextField txtInput  = new JTextField(6);
        JButton   btnCompute = new JButton("Compute");
        JButton   btnBack    = new JButton("Back to Menu");

        JPanel inputRow = new JPanel(new FlowLayout(FlowLayout.LEFT));
        inputRow.add(lblInput);
        inputRow.add(txtInput);
        inputRow.add(btnCompute);
        inputRow.add(btnBack);

        JTextArea output = new JTextArea(10, 0);
        output.setFont(new Font("Monospaced", Font.PLAIN, 13));
        output.setEditable(false);
        output.setLineWrap(true);
        JScrollPane scroll = new JScrollPane(output);

        JPanel center = new JPanel(new BorderLayout(5, 5));
        center.add(info,     BorderLayout.NORTH);
        center.add(inputRow, BorderLayout.CENTER);
        center.add(scroll,   BorderLayout.SOUTH);
        panel.add(center, BorderLayout.CENTER);

        btnCompute.addActionListener(e -> 
        {
            int n;
            try 
            {
                n = Integer.parseInt(txtInput.getText().trim());
            } catch (NumberFormatException ex) {
                output.setText("Please enter a valid whole number.");
                return;
            }
            if (n <= 2) 
            {
                output.setText("Invalid input. Number of terms must be greater than 2.");
                return;
            }

            // Compute Lucas
            long[] seq = new long[n];
            seq[0] = 2;
            seq[1] = 1;
            for (int i = 2; i < n; i++) 
            {
                seq[i] = seq[i - 1] + seq[i - 2];
            }

            output.setText(
                "This program will find all the terms of the Lucas numbers.\\n" +
                "Number of terms: " + n + "\\n\\n" +
                "The Lucas numbers are:\\n" +
                buildSequenceString(seq)
            );
        });

        btnBack.addActionListener(e -> 
        {
            txtInput.setText("");
            output.setText("");
            cardLayout.show(container, "MENU");
        });

        return panel;
    }

    // -------------------------------------------------------
    // TRIBONACCI SCREEN
    // -------------------------------------------------------
    static JPanel buildTribonacciScreen() 
    {
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setBorder(BorderFactory.createEmptyBorder(15, 20, 15, 20));

        JLabel title = new JLabel("Tribonacci Numbers");
        title.setFont(new Font("Arial", Font.BOLD, 16));
        panel.add(title, BorderLayout.NORTH);

        JTextArea info = new JTextArea(
            "Formula: T(n) = T(n-1) + T(n-2) + T(n-3),  T(0)=0, T(1)=0, T(2)=1\\n" +
            "Example: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44 ..."
        );
        info.setFont(new Font("Arial", Font.PLAIN, 12));
        info.setEditable(false);
        info.setBackground(panel.getBackground());

        JLabel    lblInput   = new JLabel("Number of terms (> 3): ");
        JTextField txtInput  = new JTextField(6);
        JButton   btnCompute = new JButton("Compute");
        JButton   btnBack    = new JButton("Back to Menu");

        JPanel inputRow = new JPanel(new FlowLayout(FlowLayout.LEFT));
        inputRow.add(lblInput);
        inputRow.add(txtInput);
        inputRow.add(btnCompute);
        inputRow.add(btnBack);

        JTextArea output = new JTextArea(10, 0);
        output.setFont(new Font("Monospaced", Font.PLAIN, 13));
        output.setEditable(false);
        output.setLineWrap(true);
        JScrollPane scroll = new JScrollPane(output);

        JPanel center = new JPanel(new BorderLayout(5, 5));
        center.add(info,     BorderLayout.NORTH);
        center.add(inputRow, BorderLayout.CENTER);
        center.add(scroll,   BorderLayout.SOUTH);
        panel.add(center, BorderLayout.CENTER);

        btnCompute.addActionListener(e -> 
        {
            int n;
            try {
                n = Integer.parseInt(txtInput.getText().trim());
            } catch (NumberFormatException ex) 
            {
                output.setText("Please enter a valid whole number.");
                return;
            }
            if (n <= 3) 
            {
                output.setText("Invalid input. Number of terms must be greater than 3.");
                return;
            }

            // Compute Tribonacci
            long[] seq = new long[n];
            seq[0] = 0;
            seq[1] = 0;
            seq[2] = 1;
            for (int i = 3; i < n; i++) 
            {
                seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3];
            }

            output.setText(
                "This program will find all the terms of the Tribonacci numbers.\\n" +
                "Number of terms: " + n + "\\n\\n" +
                "The Tribonacci numbers are:\\n" +
                buildSequenceString(seq)
            );
        });

        btnBack.addActionListener(e -> 
        {
            txtInput.setText("");
            output.setText("");
            cardLayout.show(container, "MENU");
        });

        return panel;
    }

    // -------------------------------------------------------
    // HELPER: turn array into "0, 1, 1, 2, 3" string
    // -------------------------------------------------------
    static String buildSequenceString(long[] seq) 
    {
        String result = "";
        for (int i = 0; i < seq.length; i++) 
        {
            if (seq[i] >= 1000) 
            {
                result += String.format("%,d", seq[i]);
            } else 
            {
                result += seq[i];
            }
            if (i < seq.length - 1) 
            {
                result += " , ";
            }
        }
        return result;
    }
}`;
  return <>{tokenizeJava(javaCode)}</>;
}
