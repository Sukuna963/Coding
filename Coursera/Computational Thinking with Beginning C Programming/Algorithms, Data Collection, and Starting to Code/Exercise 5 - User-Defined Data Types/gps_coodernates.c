/*
* File: gps_coodernates.c
* Author: Leonardo
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv)
{
	typedef struct GpsCoordinates GpsCoordinates;
	struct GpsCoordinates
	{
		float latitude;
		float longitude;
	};

	GpsCoordinates curitiba = { -25.293452488116284, -49.510905613566166 };
	GpsCoordinates oizumi;
	oizumi.latitude = 36.252932658862946;
	oizumi.longitude = 139.40657622720983;

	printf("The differences in latitude between locations are: %f\n",oizumi.latitude - curitiba.latitude);
	printf("the differences in longitude between locations are: %f\n",oizumi.longitude - curitiba.longitude);

	return (EXIT_SUCCESS);
}