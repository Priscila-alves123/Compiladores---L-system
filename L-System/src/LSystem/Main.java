package LSystem;

import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;


public class Main {
	private static void saveOnDisk(String path, String data) throws IOException{
		byte[] bytes = data.getBytes();
		FileOutputStream out = new FileOutputStream(path);

		out.write(bytes);
		out.close();
	}

	public static void main(String[] args) {
		try {
                        Scanner scan = new Scanner(System.in);
                        System.out.printf("Entre com o nome do arquivo de texto sem a extensão\n");
                        System.out.printf("Nome do arquivo texto: ");
                        String nome = scan.nextLine();
                        
			DolSystem dolSystem = new DolSystem(System.getProperty("user.dir") + "/inputs/" + nome + ".txt");

			SvgGenerator svgGenerator = new SvgGenerator(dolSystem);
			String svg = svgGenerator.generateSvg();
	
			saveOnDisk(System.getProperty("user.dir") + "/output.svg", svg);
			System.out.println("Gerado com sucesso!");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
